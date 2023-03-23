/*
 * Aurora Technical Exercise
 *
 * Instructions:
 *
 * During the Aurora Solar frontend technical interview, you will be
 * writing code within this editor using vanilla JavaScript and no additional libraries.
 *
 * Before coming to your interview, there are a few tasks we would like you
 * to finish to familiarize yourself with the editor, the debug console,
 * and the type of questions that will be asked.
 *
 * The Jasmine unit testing library is being loaded with a dummy test,
 * which will be used during the interview.
 * If you wish to use it before, that's fine too.
 *
 * Requirements before the interview:
 * - Make a query to retrieve information on U.S. states and territories from
 *   https://kza8bshvff.execute-api.us-east-1.amazonaws.com/default/frontendTechnicalChallenge
 * - Parse the response and generate a sorted list of states which exclude
 *   territories and "northeast" states.
 * - Display this list on the page.
 * - Save your files, and save your codesandbox URL to bring with you
 *   to the interview to continue the exercise in person.
 */
const queryUrl =
  "https://kza8bshvff.execute-api.us-east-1.amazonaws.com/default/frontendTechnicalChallenge";

async function retrieveRegionalInfo(url) {
  // Storing response
  const response = await fetch(url);
  // Storing data in form of JSON
  var regionalData = await response.json();
  if (response) {
    hideloader();
  }
  showSortedList(regionalData.data);
}
// Calling that async function
retrieveRegionalInfo(queryUrl);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}

function showSortedList(data) {
  // if (!data) {
  //   return;
  // }
  let list = `<ul></ul>`;
  const excludedRegions = ["territories", "northeast"];
  const dataWithExlcusions = data.filter((regionalCollection) => {
    return !excludedRegions.includes(regionalCollection.region);
  });
  // inline functions include incplicit return (returns last value on its own)
  const states = dataWithExlcusions.map((data) => data.states).flat();
  const sortedStates = states.sort();
  sortedStates.forEach((state) => {
    list += `<ul>
      <li>${state}</li>
    </ul>`;
  });

  document.getElementById("states").innerHTML = list;
}
