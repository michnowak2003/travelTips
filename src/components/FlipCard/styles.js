const flipCardStyles = {
  container: {
    position: "relative",
    width: 250,
    height: 350,
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "0 10px 30px -10px #0f2027"
    //TODO change color to created const
  },
  text: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    color: "white",
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 50%)",
    padding: 15,

    title: {
      marginBottom: 0
    },
    subtitle: {
      fontSize: "0.8rem",
      opacity: "0.8"
    }
  }
};

export default flipCardStyles;