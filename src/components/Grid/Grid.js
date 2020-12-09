import PropTypes from "prop-types";
import { Box, Flex } from "rebass";
import Button from "../styled/Button";

import "./Grid.css";

function Grid({
  data: { header = [], values = [], actions = [] },
  hideActions,
}) {
  return (
    <table className="gridTable">
      <thead>
        <tr>
          {header.map((colName) => (
            <th key={colName}>{colName}</th>
          ))}
          {!!actions.length && !hideActions && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => (
              <td key={colName}>{row[colName]}</td>
            ))}
            {!!actions.length && !hideActions && (
              <td className="gridActions">
                <Flex flexWrap="wrap">
                  {actions.map(({ label, action, id }) => {
                    if (id && row[id] === 0) return null;
                    return (
                      <Box m={1}>
                        <Button
                          small
                          color="#3867d6"
                          onClick={() => action(row)}
                        >
                          {label}
                        </Button>
                      </Box>
                    );
                  })}
                </Flex>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Grid.propTypes = {
  data: PropTypes.objectOf({
    header: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.arrayOf(PropTypes.object),
    actions: PropTypes.arrayOf(PropTypes.func),
  }),
  hideActions: PropTypes.bool,
};
export default Grid;
