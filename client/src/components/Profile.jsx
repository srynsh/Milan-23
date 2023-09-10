import { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import "../profile & calender.css";
import axios from "axios";
import Cookies from 'js-cookie'


const Profile = () => {
  // options Data set import from the backend
  const options = [
    "option1",
    "option2",
    "option3",
    "option4",
    "option5",
    "option6",
    "option7",
    "option8",
    "option9",
  ];

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
      .get("http://localhost:8000/profile", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.user);
        const userData = response.data.user;
        // Update the User state with user details
        setUser({
          avatar: userData.avatar_url,
          name: userData.display_name,
          email: userData.email,
          supportedTeams: userData.supportedTeams,
          events: userData.preferredEvents,
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

  const handleEventsSelect = (selectedList, selectedItem) => {
    setUser((prevUser) => ({ ...prevUser, events: selectedList }));
  };

  const handleEventsRemove = (selectedList, removedItem) => {
    setUser((prevUser) => ({ ...prevUser, events: selectedList }));
  };
  const handleBlocksSelect = (selectedList, selectedItem) => {
    setUser((prevUser) => ({ ...prevUser, supportingTeams: selectedList }));
  };
  const handleBlocksRemove = (selectedList, removedItem) => {
    setUser((prevUser) => ({ ...prevUser, events: selectedList }));
  };

  // Upon submitting the form

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(User.name)) {
      alert("Please enter a valid name.");
      return;
    }
    console.log(User);
  };

  const validateName = (name) => {
    return /^[A-Za-z\s]+$/.test(name);
  };


  return (
    <div className="container">
      <h1 className="p-8 text-xl font-bold uppercase ">Profile Details</h1>
      <form
        onSubmit={handleSubmit}
        name="myForm"
        className="flex-col justify-center"
      >
        <div className="flex gap-4 mb-8 sd:w-full layer-1">
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
            <label htmlFor="Email" className="form-label sd:w-full">
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
        <div className="gap-4 mb-8 md:flex layer-2 ">
          <div className="form-group">
            <label htmlFor="supportingTeams" className="form-label">
              Block: &nbsp;
            </label>
            <div>
              <Multiselect
                name="supportingTeams"
                id="supportingTeams"
                isObject={false}
                placeholder="Search Teams &nbsp;"
                displayValue="supportingTeams"
                options={options}
                onSelect={handleBlocksSelect}
                onremove={handleBlocksRemove}
                showCheckbox
                className="inputborder custom-multiselect-container"
                showArrow
                groupBy="category"
                selectionLimit={5}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Events" className="form-label">
              Events: &nbsp;
            </label>
            <div className="min-w-full">
              <Multiselect
                name="events"
                id="events"
                isObject={false}
                placeholder="Search Events"
                options={options}
                onSelect={handleEventsSelect}
                onRemove={handleEventsRemove}
                displayValue="name"
                showCheckbox
                className="inputborder custom-multiselect-container"
                showArrow
                groupBy="category"
              />
            </div>
          </div>
        </div>
        <button type="submit" onSubmit={handleSubmit} className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
