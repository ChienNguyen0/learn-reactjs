import React from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeOutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(e.target.value);

    if (!onSubmit) return;

    if (typingTimeOutRef) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  }

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}

export default PostFiltersForm;
