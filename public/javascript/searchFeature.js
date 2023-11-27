const searchInput = document.getElementById("searchEntry");
const searchButton = document.getElementById("searchButton");
const invalidAlert = document.getElementById("invalidAlert");

function validateSearch()
{
    if(searchInput.value.trim() === "")
    {
        searchInput.value = "INPUT SEARCH TERM";;
        searchInput.style.color = "red";
        searchInput.style.borderColor = "red";
        setTimeout(function(){
            searchInput.value = "";
            searchInput.style.color = "black";
            searchInput.style.borderColor = "white";
        }, 5000);
        return false;
    }
    return true;
}

function executeSearch(searchTerm)
{
    // alert("searching functionality still being implemented :)");
}

searchButton.addEventListener("click", function()
{
    validateSearch();
    if(validateSearch() === true)
        executeSearch(searchInput.value);
});

searchInput.addEventListener("keydown", function(event)
{
    if(event.key === "Enter")
    {
        validateSearch();
        if(validateSearch() === true)
            executeSearch(searchInput.value);
    }
})