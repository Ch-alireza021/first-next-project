

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}


const BASE_URL = "https://events-52ae0-default-rtdb.firebaseio.com/";


export const getAllEvents = async () => {
  const response = await fetch(`${BASE_URL}/events.json`);
  const data = await response.json();
  let events:Event[] = [];
  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }
  return events
};

export const getFeaturedEvents=async()=>{
  const allEvents=await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}