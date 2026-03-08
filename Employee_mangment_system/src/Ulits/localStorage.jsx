const Employees_Data = [
  {
    "employeeId": "EMP001",
    "name": "Rahul Sharma",
    "email": "rahul.sharma@company.com",
    "password": "224755",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix login bug",
        "taskDescription": "Resolve authentication issue in login module",
        "taskDate": "2026-03-10",
        "taskCategory": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update navbar UI",
        "taskDescription": "Improve responsive navbar design",
        "taskDate": "2026-03-05",
        "taskCategory": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Deploy staging server",
        "taskDescription": "Deploy latest build on staging environment",
        "taskDate": "2026-03-03",
        "taskCategory": "DevOps"
      }
    ]
  },
  {
    "employeeId": "EMP002",
    "name": "Priya Verma",
    "email": "priya.verma@company.com",
    "password": "224755",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create dashboard UI",
        "taskDescription": "Build admin dashboard layout",
        "taskDate": "2026-03-11",
        "taskCategory": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "API integration",
        "taskDescription": "Connect dashboard with employee API",
        "taskDate": "2026-03-12",
        "taskCategory": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix CSS overflow",
        "taskDescription": "Resolve scrolling issue in sidebar",
        "taskDate": "2026-03-04",
        "taskCategory": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Optimize images",
        "taskDescription": "Reduce image size for performance",
        "taskDate": "2026-03-02",
        "taskCategory": "Performance"
      }
    ]
  },
  {
    "employeeId": "EMP003",
    "name": "Aman Gupta",
    "email": "aman.gupta@company.com",
    "password": "224755",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design database schema",
        "taskDescription": "Create schema for employee tasks",
        "taskDate": "2026-03-09",
        "taskCategory": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Setup MongoDB",
        "taskDescription": "Configure MongoDB for project",
        "taskDate": "2026-03-06",
        "taskCategory": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Write API tests",
        "taskDescription": "Add unit tests for APIs",
        "taskDate": "2026-03-01",
        "taskCategory": "Testing"
      }
    ]
  },
  {
    "employeeId": "EMP004",
    "name": "Neha Singh",
    "email": "neha.singh@company.com",
    "password": "224755",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Build task form",
        "taskDescription": "Create form to add employee tasks",
        "taskDate": "2026-03-13",
        "taskCategory": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Form validation",
        "taskDescription": "Add validation for task inputs",
        "taskDate": "2026-03-14",
        "taskCategory": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Refactor components",
        "taskDescription": "Improve reusable UI components",
        "taskDate": "2026-03-05",
        "taskCategory": "React"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix modal bug",
        "taskDescription": "Modal closing unexpectedly",
        "taskDate": "2026-03-02",
        "taskCategory": "Bug Fix"
      }
    ]
  },
  {
    "employeeId": "EMP005",
    "name": "Rohit Patel",
    "email": "rohit.patel@company.com",
    "password": "224755",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement search",
        "taskDescription": "Add employee search feature",
        "taskDate": "2026-03-12",
        "taskCategory": "Feature"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug fixing",
        "taskDescription": "Resolve reported UI issues",
        "taskDate": "2026-03-06",
        "taskCategory": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Pagination logic",
        "taskDescription": "Implement pagination for employee list",
        "taskDate": "2026-03-03",
        "taskCategory": "Backend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code review",
        "taskDescription": "Review pull requests of team",
        "taskDate": "2026-03-15",
        "taskCategory": "Team"
      }
    ]
  }
]
const Admin_Data = [
    {
        "id" : "AD1",
        "email" : "keshariyakrishna8@gmail.com",
        "password" : "Kk224755"
    }
]

export const setLocalStorage = () =>{
    localStorage.setItem("employees", JSON.stringify(Employees_Data));
    localStorage.setItem("admin", JSON.stringify(Admin_Data));
}


export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"));
    
     return {employees, admin}
}