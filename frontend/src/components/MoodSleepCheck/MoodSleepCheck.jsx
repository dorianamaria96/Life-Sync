import './styles.css';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const MoodSleepCheck = (props) => {
  const nodeRef = React.useRef(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [note, setNote] = useState('');
  const [moodSelected, setMoodSelected] = useState(0);
  const [sleepSelected, setSleepSelected] = useState(null);

  // useEffect(() => {
  //   const validateForm = !Object.values(newEvent).some(
  //     (item) => item === null || item.length === 0,
  //   );
  //   if (validateForm) {
  //     setButtonDisabled(false);
  //   } else {
  //     setButtonDisabled(true);
  //   }
  // }, [newEvent]);

  // const createEvent = (event) => {
  //   event.preventDefault();

  //   apiFetch(
  //     'http://localhost:8080/api/events/newEvent',
  //     'POST',
  //     JSON.stringify(newEvent),
  //   );
  //   props.onClose();
  // };

  const moodIcons = [
    {
      icon: '🤗',
      text: 'Great!',
    },
    {
      icon: '😄',
      text: 'Good',
    },
    {
      icon: '🙂',
      text: 'Not bad',
    },
    {
      icon: '😐',
      text: 'Not good',
    },
    {
      icon: '🙁',
      text: 'Rough day',
    },
  ];

  const sleepIcons = [
    {
      icon: '❤️',
      text: 'Really Well',
    },
    {
      icon: '🧡',
      text: 'Well',
    },
    {
      icon: '💛',
      text: 'OK',
    },
    {
      icon: '💙',
      text: 'So-So',
    },
    {
      icon: '🖤',
      text: 'Bad sleep',
    },
  ];

  return (
    <CSSTransition
      in={props.showMoodSleepCheck}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      nodeRef={nodeRef}
    >
      <div
        className={`new-event-modal ${props.showMoodSleepCheck ? 'show' : ''}}`}
        onClick={props.onClose}
        ref={nodeRef}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <form className="center-form">
            <div className="top">
              <div className="modal-header">
                <h4 className="modal-title">How are you feeling today?</h4>
              </div>

              <div className="modal-body">
                <h5 className="event-title">How was your day?</h5>
                <div className="position-mood-icons">
                  {moodIcons.map((icon, i) => (
                    <div
                      className="position-icons"
                      onClick={() => setMoodSelected(i)}
                      key={i}
                    >
                      <span
                        className={`${
                          moodSelected === i ? 'bigger-icon' : 'icon'
                        }`}
                      >
                        {icon.icon}
                      </span>
                      <span
                        className={` ${
                          moodSelected === i ? 'font-bold' : 'text-icon'
                        }`}
                      >
                        {icon.text}
                      </span>
                    </div>
                  ))}
                </div>
                <h5 className="event-title">How did you sleep?</h5>
                <div className="position-sleep-icons">
                  {sleepIcons.map((icon, i) => (
                    <div
                      className=""
                      onClick={() => setSleepSelected(i)}
                      key={i}
                    >
                      <span
                        className={`${
                          sleepSelected === i ? 'bigger-icon' : 'icon'
                        }`}
                      >
                        {icon.icon}
                      </span>
                      <br />
                      <span
                        className={` ${
                          sleepSelected === i ? 'font-bold' : 'text-icon'
                        } `}
                      >
                        {icon.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="note-title">Notes</p>
            <textarea
              name="textarea"
              rows="4"
              cols="35"
              placeholder={`Add about your day`}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </form>

          <div className="modal-footer">
            <button
              className="submit-button"
              // onClick={(event) => createEvent(event)}
              disabled={buttonDisabled}
            >
              Submit
            </button>
            {/* <button className="close-button" onClick={props.onClose}>
              Close
            </button> */}
          </div>
          {}
        </div>
      </div>
    </CSSTransition>
  );
};

export default MoodSleepCheck;
