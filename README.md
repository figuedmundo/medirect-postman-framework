# Automated API Testing with Postman & Newman

## Project Overview
This repository contains automated API tests for the **Restful Booker API**, implemented using **Postman** and executed via **Newman**. The tests validate key functionalities such as authentication, booking creation, retrieval, update, and deletion. The project is designed to be easily configurable and executable in both local and CI/CD environments.

## Project Structure
```
.
├── .gitignore
├── .github/
│   └── workflows/
│       └── api-tests.yml
├── package.json
├── README.md
├── reports/
│   └── report_YYYY-MM-DD_HH-MM-SS.html
└── src/
    ├── collections/
    │   ├── automation.postman_environment.json
    │   └── booker-api.postman_collection.json
    ├── main.js
    └── utils.js
```



## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js (>= v14)**: [Download & Install](https://nodejs.org/)
- **Postman** (optional for local debugging): [Download & Install](https://www.postman.com/)

### Clone the Repository
```sh
git clone https://github.com/figuedmundo/medirect-postman-framework.git && cd medirect-postman-framework
```

### Install dependencies
```sh
npm install
```

### Run the tests
```sh
npm run test
```

### Viewing Test Reports
Test reports are generated inside the `reports/` directory. The latest report is named in the format:
```
report_YYYY-MM-DD_HH-MM-SS.html
```

## CI/CD Integration
This project includes a GitHub Actions workflow for running the tests in a CI/CD pipeline. The workflow is defined in [`.github/workflows/api-tests.yml`](.github/workflows/api-tests.yml).


## Workflow Steps
1. **Checkout repo**: Checks out the repository.
2. **Install dependencies**: Installs the project dependencies.
3. **Run Postman tests with Newman**: Executes the tests using Newman.
5. **Find Latest Report File**: Finds the latest test report.
