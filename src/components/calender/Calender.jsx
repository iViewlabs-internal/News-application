import Calendar from 'react-calendar';
import React,{useState} from 'react';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    const onDateChange = (newDate) => {
      setDate(newDate);
      console.log(newDate);
    }
   
    return (
        <Calendar
          onChange={onDateChange}
          value={date}
          showNeighboringMonth={false}
          locale={"en-US"}
          selectRange={true}
        />
    );
}

export default Calender