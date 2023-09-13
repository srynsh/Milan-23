import { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import "../profile & calender.css";
import axios from "axios";
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

  //console.log(input_event)
  fetch("./events.json")
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

  fetch("./teams.json")
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

  //User Details Import from Backend

  const [User, setUser] = useState({
    avatar: "",
    name: "",
    email: "",
    supportedTeams: [],
    Events: [],
  });

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "profile", {
        withCredentials: true,
      })
      .then((response) => {
        console.log("GIVING DATA", response.data);
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
  }, []); // Empty dependency array to run the effect only once on component mount

  useEffect(() => {
    console.log(User); // Log the updated User state here
  }, [User]); // Add User as a dependency to this effect

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
    setUser((prevUser) => ({ ...prevUser, events: selectedList }));
  };

  const handleEventsSelect = (selectedList, selectedItem) => {
    setUser((prevUser) => ({ ...prevUser, events: selectedList }));
    setEventsValid(selectedList.length > 0);
  };

  const handleBlocksSelect = (selectedList, selectedItem) => {
    setUser((prevUser) => ({ ...prevUser, supportingTeams: selectedList }));
    setTeamsValid(selectedList.length > 0);
  };

  // Upon submitting the form

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(User.name)) {
      alert("Please enter a valid name.");
      return;
    }
    if(!eventsValid){
      alert("Please select atleast one Event!");
      return;
    }
    if(!teamsValid){
      alert("Please select atleast one Team!");
      return;
    }
    //console.log(User);
    axios
      .post("http://localhost:8000/profile/update", User, {
        withCredentials: true,
      })
      .then((data) => {
        if (data.status === 200) {
          alert("Profile Updated Successfully");
        } else {
          alert("Error updating profile");
        }
      });
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
            <div style={{transition:'all 1s ease-in'}}>
              <Multiselect
                name="supportingTeams"
                id="supportingTeams"
                isObject={false}
                placeholder="Search Teams &nbsp;"
                displayValue="supportingTeams"
                options={toptions}
                onSelect={handleBlocksSelect}
                onremove={handleBlocksRemove}
                showCheckbox
                className="inputborder custom-multiselect-container"
                showArrow
                groupBy="category"
                selectionLimit={1}
                hidePlaceholder={true}
                selectedValues={User.supportedTeams}
                style={{
                  multiselectContainer:{
                    marginBottom: isBlocksMultiselectClicked ? "240px" : "0",
                    transition: "margin 1s ease-in-out",
                  },
                  searchBox: {
                    border: 0,
                    height:'30px',
                  },
                  chips: {
                    background: "rgba(111, 0, 53, 1) 4%",
                  },
                  searchWrapper:{
                    alignItems:'center',
                  },
                }}
              />
              {!teamsValid && (
                <div className="error-message">
                  Please select at least one team.
                </div>
              )}
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
                placeholder="Search Events"
                options={eoptions}
                onSelect={handleEventsSelect}
                onRemove={handleEventsRemove}
                displayValue="name"
                showCheckbox
                className="inputborder custom-multiselect-container"
                showArrow
                selectedValues={User.events}
                groupBy="category"
                style={{
                  multiselectContainer:{
                    marginBottom: isEventsMultiselectClicked ? "260px" : "0",
                    transition: "margin 1s ease-in-out",
                  },
                  searchBox: {
                    border: 0,
                    height:'30px',
                  },
                  chips: {
                    background: "rgba(111, 0, 53, 1) 4%",
                  },
                  searchWrapper:{
                    alignItems:'center',
                  },
                }}
              />
              {!eventsValid && (
                <div className="error-message">
                  Please select at least one event.
                </div>
              )}
            </div>
          </div>
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
      </form>
    </div>
  );
};

export default Profile;
