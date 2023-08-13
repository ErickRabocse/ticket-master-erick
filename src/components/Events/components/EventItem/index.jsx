const EventItem = ({ info, name, image, id, onEventClick }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };
  return (
    <div onClick={() => console.log("THE PARENT WAS CLICKED")}>
      <img src={image} alt={name} height={200} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>See more</button>
    </div>
  );
};

export default EventItem;
