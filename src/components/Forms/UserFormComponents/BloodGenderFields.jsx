import React from 'react';
import { Field } from 'formik';
import {
  OrangeRadio,
  RadioLabel,
  BloodThumb,
  Label,
  BloodGenderThumb,
  GenderThumb,
  LabelGender,
} from '../UserForm.styled';

const BloodGenderFields = ({ blood, sex }) => {
  return (
    <BloodGenderThumb>
      <div role="group" aria-labelledby="demo-row-radio-buttons-group-label">
        <Label id="demo-row-radio-buttons-group-label">Blood</Label>
        <BloodThumb role="group" aria-labelledby="my-radio-group">
          <RadioLabel>
            <Field as={OrangeRadio} type="radio" name="blood" value="1" />1
          </RadioLabel>
          <RadioLabel>
            <Field as={OrangeRadio} type="radio" name="blood" value="2" />2
          </RadioLabel>
          <RadioLabel>
            <Field as={OrangeRadio} type="radio" name="blood" value="3" />3
          </RadioLabel>
          <RadioLabel>
            <Field as={OrangeRadio} type="radio" name="blood" value="4" />4
          </RadioLabel>
        </BloodThumb>
      </div>

      <GenderThumb
        role="group"
        aria-labelledby="demo-row-radio-buttons-group-label"
      >
        <LabelGender>
          <Field as={OrangeRadio} type="radio" name="sex" value="male" />
          Male
        </LabelGender>
        <LabelGender>
          <Field as={OrangeRadio} type="radio" name="sex" value="female" />
          Female
        </LabelGender>
      </GenderThumb>
    </BloodGenderThumb>
  );
};

export default BloodGenderFields;
