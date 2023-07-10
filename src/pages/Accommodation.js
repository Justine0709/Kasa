





const Accommodation = () => {

  const { id } = useParams();

  const accommodationData = AccommodationsList.find(
    (accommodation) => accommodation.id === id
  );

  if (!accommodationData) {
    return <p>Accommodation not found!</p>;
  }

  return (
    
    <div>
         <Header/>
      
      <h2>{accommodationData.title}</h2>
      <img src={accommodationData.cover} alt={accommodationData.title} />
      <p>Description: {accommodationData.description}</p>
      <p>Location: {accommodationData.location}</p>
    </div>
  );
};

export default Accommodation;




