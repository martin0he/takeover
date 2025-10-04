"use client";

import { useState } from "react";
import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PageLayout from "../PageLayout";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface MyEvent extends Event {
  title: string;
  start: Date;
  end: Date;
}

export default function CalendarPage() {
  const [events, setEvents] = useState<MyEvent[]>([
    {
      title: "Team Meeting",
      start: new Date(2025, 9, 10, 10, 0),
      end: new Date(2025, 9, 10, 11, 0),
    },
    {
      title: "Dentist Appointment",
      start: new Date(2025, 9, 12, 15, 30),
      end: new Date(2025, 9, 12, 16, 0),
    },
  ]);

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents((prev) => [...prev, { title, start, end }]);
    }
  };

  const handleSelectEvent = (event: MyEvent) => {
    const confirmDelete = confirm(`Delete "${event.title}"?`);
    if (confirmDelete) {
      setEvents((prev) => prev.filter((e) => e !== event));
    }
  };

  return (
    <PageLayout title="Calendar">
      <div className="h-full p-4 bg-white rounded-xl shadow">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          style={{ height: "100%" }}
        />
      </div>
    </PageLayout>
  );
}
