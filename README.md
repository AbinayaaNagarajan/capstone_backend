# Backend for Student Management System

## Prerequisites
- Node.js installed
- MongoDB server running
- NPM  installed

Install dependencies:
npm install
npm run dev

Usage
Access the API at http://localhost:3000/.
API Endpoints
GET /api/students/getAllStudent/: Get all student details.
POST /api/students/addStudent/: Add a new student.
DELETE /api/students/deletestudent/:id: Delete a specific student.
POST /api/contacts/saveContact: Save contact form data.
POST /api/attendance/saveAttendance: Save attendance data.
POST /api/attendance/editAttendance: Edit attendance data.
For detailed information on each endpoint, refer to the respective controller files.

Authentication
Some routes require authentication. Include the auth header with the value mypassword for authentication.
