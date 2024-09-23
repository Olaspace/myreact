import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Step 3: Initialize the state
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate software developer.",
        imgSrc: "https://via.placeholder.com/150", // Sample image URL
        profession: "Software Engineer"
      },
      shows: false, // Step 3: State to toggle the profile display
      timeInterval: 0 // Step 4: Time since the component was mounted
    };
    this.intervalId = null; // To store the interval ID
  }

  // Step 5: Start the interval when the component mounts
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1 // Increment the time interval
      }));
    }, 1000); // Update every second
  }

  // Step 6: Clear the interval when the component unmounts
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Step 7: Toggle the show state
  toggleShow = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeInterval } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>{shows ? fullName : "Click the button to show profile"}</h1>
        {shows && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        <p>Time since component mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
