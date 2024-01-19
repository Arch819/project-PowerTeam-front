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
  birthday,
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
          value={height}
          placeholder="0"
          required
        />
      </PersonalInfoItems>
      <PersonalInfoItems>
        <Label htmlFor="currentWeight">Current Weight</Label>
        <Input
          type="text"
          id="currentWeight"
          name="currentWeight"
          value={currentWeight}
          placeholder="0"
          required
        />
      </PersonalInfoItems>
      <PersonalInfoItems>
        <Label htmlFor="desiredWeight">Desired Weight</Label>
        <Input
          type="text"
          id="desiredWeight"
          name="desiredWeight"
          value={desiredWeight}
          placeholder="0"
          required
        />
      </PersonalInfoItems>
      <PersonalInfoItems>
        <Label htmlFor="birthday">Date of birth</Label>
        <ProfileDatepicker value={birthday} onChange={onChange} />
      </PersonalInfoItems>
    </PersonalInfo>
  );
};

export default PersonalInfoFields;
