import { createClient, print } from 'redis';

const client = createClient()
  .on('connect', () => {
    console.log('Redis client connected to the server');
  })
  .on('error', (err) =>
    console.log('Redis client not connected to the server: ', err)
  );

//function to set a new school value
function setNewSchool(schoolName, value) {
  client.SET(schoolName, value, print);
}

// Function to display the value for a school
function displaySchoolValue(schoolName) {
  client.GET(schoolName, (err, reply) => {
    console.log(reply);
  });
}

// Call the functions
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
