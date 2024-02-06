const Filter = ({filter, setFilter}) => {

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        if (event.target.value !== filter)
        {
            setFilter(event.target.value)
        }
    }
    
    return (
    <div>
        filter shown with
        <input
            value={filter}
            onChange={handleFilterChange}
        />
    </div>
    )
  }

  export default Filter