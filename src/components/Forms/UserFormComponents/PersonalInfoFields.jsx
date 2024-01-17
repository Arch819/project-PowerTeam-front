import React from 'react';
import {
  PersonalInfo,
  Label,
  Input,
  PersonalInfoItems,
} from '../UserForm.styled';

const PersonlInfoFields = ({
  height,
  currentWeight,
  desiredWeight,
  dateOfBirth,
}) => {
  return (
    <PersonalInfo>
      <PersonalInfoItems>
        <Label htmlFor="height">Height</Label>
        <Input
          type="text"
          id="height"
          name="height"
          placeholder={height}
          required
        />
      </PersonalInfoItems>
      <PersonalInfoItems>
        <Label htmlFor="currentWeight">Current Weight</Label>
        <Input
          type="text"
          id="currentWeight"
          name="currentWeight"
          placeholder={currentWeight}
          required
        />
      </PersonalInfoItems>
      <PersonalInfoItems>
        <Label htmlFor="desiredWeight">Desired Weight</Label>
        <Input
          type="text"
          id="desiredWeight"
          name="desiredWeight"
          placeholder={desiredWeight}
          required
        />
      </PersonalInfoItems>
      <PersonalInfoItems>
        <Label htmlFor="dateOfBirth">Date of birth</Label>
        <Input
          type="text"
          id="dateOfBirth"
          name="dateOfBirth"
          placeholder={dateOfBirth}
          required
        />
      </PersonalInfoItems>
    </PersonalInfo>
  );
};

export default PersonlInfoFields;
