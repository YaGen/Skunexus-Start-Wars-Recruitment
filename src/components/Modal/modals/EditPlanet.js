import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Flex } from "rebass";
import PropTypes from "prop-types";

import { H2 } from "../../styled/Heading";
import Input, { Select } from "../../styled/Input";
import Button from "../../styled/Button";
import { submitEditPlanetModal } from "../modal.actions";

const terrains = [
  { value: "", txt: "Choose terrain of the planet" },
  { value: "jungle", txt: "Jungle" },
];

const Form = styled(Flex).attrs({
  mt: 4,
  maxWidth: "600px",
  width: ["100%"],
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  as: "form",
})``;

const EditPlanetModal = ({ onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedTerrain, setSelectedTerrain] = useState("");

  const handleTerrainChange = (selectedOption) => {
    setValue("terrainSelect", selectedOption.target.value);
    setSelectedTerrain(selectedOption.target.value);
  };

  useEffect(() => {
    register({ name: "terrainSelect", value: terrains[0].value });
  }, []);

  return (
    <Flex flexDirection="column" width={2 / 3}>
      <H2>Edit Planet Details</H2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder={"Name"} name="name" register={register} required />
        <Input
          placeholder={"Rotation Period"}
          name="rotation_period"
          type="number"
          register={register}
          required
        />
        <Input
          placeholder={"Orbital Period"}
          name="orbital_period"
          type="number"
          register={register}
          required
        />
        <Input
          placeholder={"Diameter"}
          name="diameter"
          register={register}
          required
        />
        <Input
          placeholder={"Climate"}
          name="climate"
          register={register}
          required
        />
        <Input
          placeholder={"Gravity"}
          name="gravity"
          register={register}
          required
        />
        <Select
          name="terrainSelect"
          value={selectedTerrain}
          onChange={handleTerrainChange}
          options={terrains}
          required
        />
        <Input
          placeholder={"Surface water"}
          name="surface_water"
          register={register}
          required
        />

        <Button type="submit" mt={4} color="#b4003d" width={1}>
          Submit form
        </Button>
      </Form>
    </Flex>
  );
};

EditPlanetModal.propTypes = {
  onSubmit: PropTypes.func,
};

const mapDispatchToProps = {
  onSubmit: submitEditPlanetModal,
};

export default connect(null, mapDispatchToProps)(EditPlanetModal);
