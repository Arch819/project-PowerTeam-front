import React from 'react';
import { Field } from 'formik';
import {
  LevelActivitiThumb,
  OrangeRadio,
  ActivitiLabel,
} from '../UserForm.styled';

const ActivitiLevelFields = ({ levelActivity }) => {
  return (
    <LevelActivitiThumb role="group" aria-labelledby="levelActivity">
      <ActivitiLabel>
        <Field as={OrangeRadio} type="radio" name="levelActivity" value="1" />
        Sedentary lifestyle (little or no physical activity)
      </ActivitiLabel>
      <ActivitiLabel>
        <Field as={OrangeRadio} type="radio" name="levelActivity" value="2" />
        Light activity (light exercises/sports 1-3 days per week)
      </ActivitiLabel>
      <ActivitiLabel>
        <Field as={OrangeRadio} type="radio" name="levelActivity" value="3" />
        Moderately active (moderate exercises/sports 3-5 days per week)
      </ActivitiLabel>
      <ActivitiLabel>
        <Field as={OrangeRadio} type="radio" name="levelActivity" value="4" />
        Very active (i ntense exercises/sports 6-7 days per week)
      </ActivitiLabel>
      <ActivitiLabel>
        <Field as={OrangeRadio} type="radio" name="levelActivity" value="5" />
        Extremely active (very strenuous exercises/sports and physical work)
      </ActivitiLabel>
    </LevelActivitiThumb>
  );
};

export default ActivitiLevelFields;
