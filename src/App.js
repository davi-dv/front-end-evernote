import React from 'react';
import "./App.scss";
import { Notification, Section } from 'rbx';
 
const App = () => (
  <div>
    <Section>
      <Notification color="success">
        Javascript Notes!
      </Notification>
    </Section>
  </div>
)
 
export default App;