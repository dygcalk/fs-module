import fs from 'fs';

fs.writeFile(
  'example.json',
  '{"name": "Employee 1 Name", "salary": 2000} ',
  (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }
);

fs.readFile('example.json', 'utf-8', (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

fs.appendFile('example.json', '\n{"name": "Employee 2"}', (err) => {
  if (err) console.log(err);
  console.log('The "data to append" was appended to file!');
});

fs.unlink('example.json', (err) => {
  if (err) console.log(err);
});
