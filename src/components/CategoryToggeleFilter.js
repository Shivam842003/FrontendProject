import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { useDispatch } from 'react-redux';

export const Categorys = ['ALL', 'APPAREL', 'ELECTRONICS', 'FOOTWEAR', 'PERSONAL CARE '];
export default function CategorysToggleFilter() {
    const dispatch = useDispatch();
    const [alignment, setAlignment] = useState('web');
    return(
        <ToggleButtonGroup
    color="primary"
    size="large"
    value={alignment}
    exclusive
    onChange={(e, newAlignment) => {
        dispatch({type: 'setCategory', payload: newAlignment});
        setAlignment(newAlignment);
    }}
    aria-label="Platform"
    sx={{marginTop: 1}}
    >
        {
             Categories.map((category) => {
                return(
                  <ToggleButton key={category} value={category}>{category}</ToggleButton>
                );
              })
            }
          </ToggleButtonGroup>
              );
          }