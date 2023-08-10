const events = [
  {
    id: "e0001",
    title: "Programming for everyone",
    dept_code: "ICTD",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2023-08-12",
    time: "17:00",
    image: "/images/events/coding-event.jpg",
  },
  {
    id: "e0004",
    title: "Programming for Developers",
    dept_code: "ICTD",
    description:
      "Are you a developer seeking career advancement?  This event is for you! Yes, you! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2024-05-12",
    time: "10:30",
    image: "/images/events/coding-event-dev.jpg",
  },
  {
    id: "e0002",
    title: "Networking for introverts",
    dept_code: "MGDE",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2023-08-30",
    time: "09:00",
    image: "/images/events/introvert-event.jpg",
  },
  {
    id: "e0003",
    title: "Networking for extroverts",
    dept_code: "MGDE",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2023-09-10",
    time: "09:30",
    image: "/images/events/extrovert-event.jpg",
  },
];

export function getAllEvents() {
  return events;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return events.find((event) => event.id === id);
}

export function getEventsByDept(dept_code) {
  return events.filter((event) => event.dept_code === dept_code);
}

export function getEventDate(event) {
  return new Date(event.date).toDateString();
}

export function getEventTime(event) {
  return new Date(event.date + "T" + event.time).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
