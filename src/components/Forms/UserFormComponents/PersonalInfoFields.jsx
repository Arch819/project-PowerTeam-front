import React from 'react';
import {
  PersonalInfo,
  Label,
  Input,
  PersonalInfoItems,
} from '../UserForm.styled';
import ProfileDatepicker from './ProfileDatepicker';

const PersonalInfoFields = ({
  height,
  currentWeight,
  desiredWeight,
  dateOfBirth,
  onChange,
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
        <ProfileDatepicker value={dateOfBirth} onChange={onChange} />
      </PersonalInfoItems>
    </PersonalInfo>
  );
};

export default PersonalInfoFields;
