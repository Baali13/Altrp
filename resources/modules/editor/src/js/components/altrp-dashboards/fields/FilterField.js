import React, { useState, useEffect, useCallback } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

function FilterField({ widget, setWidget, param }) {
  const [options, setOptions] = useState([]);
  //const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getOptions = useCallback(
    async (param) => {
      setIsLoading(true);
      const req = await axios(`/ajax/models/queries/${param.model}/${param.value}`);
      if (req.status === 200) {
        setOptions(req.data.data);
        setIsLoading(false);
      }
    },
    [param]
  );

  useEffect(() => {
    options.length === 0 && getOptions(param);
  }, [param]);

  console.log("param :>> ", widget);

  return (
    <Form.Group>
      <Form.Label>{param.label}</Form.Label>
      <Form.Control
        as="select"
        custom
        value={widget.filter?.[param.value] || ""}
        onChange={(e) =>
          setWidget({ ...widget, filter: { ...widget.filter, [param.value]: e.target.value } })
        }
        required
      >
        <option value="">-</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}

export default FilterField;