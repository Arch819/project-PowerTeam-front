import React from 'react';
import { MainInfo, Label, MainInfoContainer, Input } from '../UserForm.styled';

const NameEmailFields = ({ name, email }) => {
  return (
    <MainInfo>
      <MainInfoContainer>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder={name} required />
      </MainInfoContainer>
      <MainInfoContainer>
        <Label htmlFor="height">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder={email}
          required
        />
      </MainInfoContainer>
    </MainInfo>
  );
};

export default NameEmailFields;
