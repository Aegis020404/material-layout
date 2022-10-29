import {TextField} from "@material-ui/core";

const Search = (props) => {
    const {onChange, value} = props;

    return <TextField
        sx={{
            mb:"1.5rem"
        }}
        fullWidth={true}
        label={'search'}
        type='search'
        value={value}
        onChange={onChange}
    />;
};

export default Search;