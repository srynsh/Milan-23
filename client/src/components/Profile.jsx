import { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import "../profile & calender.css";
import axios from "axios";
import Loading from "./Loading";
//import input_event from  "events.json"

const Profile = () => {
  // options Data set import from the backend
  const [eoptions, esetoptions] = useState([
    "option1",
    "option2",
    "option3",
    "option4",
    "option5",
    "option6",
    "option7",
    "option8",
    "option9",
  ]);
  const [toptions, tsetoptions] = useState(["option1", "option2"]);

  const [eventsValid, setEventsValid] = useState(false);
  const [teamsValid, setTeamsValid] = useState(false);
  const [loading, setLoading] = useState(true);


  //console.log(input_event)
  useEffect(() => {
   const fetchData = async() => {
    await fetch("/events.json",{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const inputList = data.inputList;
      esetoptions(inputList);

      // You can use 'inputList' here or perform any other operations with it
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });


  await fetch("/teams.json",{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }})
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const inputList = data.inputList;
      tsetoptions(inputList);

      // You can use 'inputList' here or perform any other operations with it
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });
   }

   fetchData()
  }, [])
  //User Details Import from Backend

  const [User, setUser] = useState({
    avatar: "",
    name: "",
    email: "",
    supportedTeams: [],
    events: [],
  });

  useEffect(() => {
    setLoading(true);                
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "profile", {
        withCredentials: true,
      })
      .then((response) => {
         //res.auth is false then redirect to login page
        if (!response.data.auth) {
          window.location.href = "/login";
        }
        //console.log(response.data);
        //console.log("GIVING DATA", response.data);
        const userData = response.data.user;
        // Update the User state with user details
     

        setUser({
          avatar: userData.avatar_url,
          name: userData.display_name,
          email: userData.email,
          supportedTeams: userData.supportedTeams,
          events: userData.preferedEvents,
        });

  
      
      })

      .catch((error) => {
        console.error("Error fetching user details: ", error);
      });

            //set the valid variable  to true if the user has already selected the events and teams
            setTimeout(() => {
              setLoading(false);
            }, 1300);
      

  }, []); 

  // Handling selections/Changes in the Form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value || "" };
    });
  };


  const handleEventsRemove = (selectedList, removedItem) => {
    setUser((prevUser) => ({ ...prevUser, events: selectedList }));
  };

  const handleBlocksRemove = (selectedList, removedItem) => {
    setUser((prevUser) => ({ ...prevUser, supportedTeams: selectedList }));
  };

  const handleEventsSelect = (selectedList, selectedItem) => {
    setUser((prevUser) => ({ ...prevUser, events: selectedList }));
    setEventsValid(selectedList.length > 0);
  };

  const handleBlocksSelect = (selectedList, selectedItem) => {
    setUser((prevUser) => ({ ...prevUser, supportedTeams: selectedList }));
    setTeamsValid(selectedList.length > 0);
  };

  // Upon submitting the form

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("running");

    if (!validateName(User.name)) {
      alert("Please enter a valid name.");
      return;
    }
    else if (User.events.length == 0) {
      alert("Please select atleast one Event!");
      return;
    }
    else if  (User.supportedTeams.length == 0) {
      alert("Please select atleast one Team!");
      return;
    }
   else{
    axios
    .post(import.meta.env.VITE_BACKEND_URL + "profile/update", User, {
      withCredentials: true,
    })
    .then((data) => {
      if (data.status === 200) {
        alert("Profile Updated Successfully");
      } else {
        alert("Error updating profile");
      }
    });
    console.log("done");
   }
  };

  const validateName = (name) => {
    return /^[A-Za-z\s]+$/.test(name);
  };
  const [isEventsMultiselectClicked, setIsEventsMultiselectClicked] = useState(
    false
  );

  const handleEventsMultiselectFocus = () => {
    setIsEventsMultiselectClicked(true);
  };
  const handleEventsMultiselectBlur = () => {
    setIsEventsMultiselectClicked(false);
  };
  const [isBlocksMultiselectClicked, setIsBlocksMultiselectClicked] = useState(
    false
  );
  const handleBlocksMultiselectFocus = () => {
    setIsBlocksMultiselectClicked(true);
  };

  const handleBlocksMultiselectBlur = () => {
    setIsBlocksMultiselectClicked(false);
  };


  return (
    <div>
      {loading ? (<Loading />) : (
        <>
        <div className="container">
        <h1 className="">Profile Details</h1>
        <form onSubmit={handleSubmit} name="myForm" className="">
          <div className="layer1">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name: &nbsp;
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="inputborder"
                onChange={handleChange}
                value={User.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email" className="form-label ">
                Email: &nbsp;
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                className="inputborder"
                value={User.email}
                disabled
              />
            </div>
          </div>
          <div className=" layer-2">
            <div className="form-group"
              onFocus={handleBlocksMultiselectFocus}
              onBlur={handleBlocksMultiselectBlur}>
              <label htmlFor="supportingTeams" className="form-label">
                Block: &nbsp;
              </label>
              <div style={{ transition: 'all 1s ease-in' }}>
                <Multiselect
                  name="supportingTeams"
                  id="supportingTeams"
                  isObject={false}
                  placeholder={'Search Team'}
                  displayValue="supportingTeams"
                  options={toptions}
                  onSelect={handleBlocksSelect}
                  onRemove={handleBlocksRemove}
                  showCheckbox
                  className="inputborder custom-multiselect-container"
                  showArrow
                  groupBy="category"
                  selectionLimit={1}
                  hidePlaceholder={true}
                  selectedValues={User.supportedTeams}
                  style={{
                    multiselectContainer: {
                      marginBottom: isBlocksMultiselectClicked ? "240px" : "0",
                      transition: "margin 1s ease-in-out",
                    },
                    searchWrapper:{
                      height:'27px',
                    }
                  }}
                />
              </div>
            </div>
            <div className="form-group"
              onFocus={handleEventsMultiselectFocus}
              onBlur={handleEventsMultiselectBlur}>
              <label htmlFor="Events" className="form-label">
                Events: &nbsp;
              </label>
              <div className="">
                <Multiselect
                  name="events"
                  id="events"
                  isObject={false}
                  options={eoptions}
                  onSelect={handleEventsSelect}
                  onRemove={handleEventsRemove}
                  displayValue="name"
                  placeholder={"Search Events"}
                  showCheckbox
                  className="inputborder custom-multiselect-container"
                  showArrow
                  selectedValues={User.events}
                  groupBy="category"
                  style={{
                    multiselectContainer: {
                      marginBottom: isEventsMultiselectClicked ? "240px" : "0",
                      transition: "margin 1s ease-in-out",
                    },
                    optionContainer: {  
                      border:'2px solid',
                    },
                    searchWrapper:{
                      height:'32px',
                    },chips:{
                      display:'none',
                    },  
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
                      <div>
                      <button
                        type="submit"
                        onSubmit={handleSubmit}
                        className="submit-button"
                      >
                        Submit
                      </button>
                    </div>
      </>
      )}
    </div>
  );
};

export default Profile;
