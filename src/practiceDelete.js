const jobs = [
    {id : 1, isActive: true},
    {id : 2, isActive: true},
    {id : 3, isActive: false},



];

const activeJobs = jobs.filter(function(job) {return job.isActive});
const activeJobs = jobs.filter((job) => return job.isActive);

const colors = {'blue', 'white', 'beige'};
const items = colors.map(color => '<li>' + color + '</li>'); // or template string `<li>${color}</li>`);

console.log(items);