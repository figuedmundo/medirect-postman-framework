# Automated API Testing with Postman & Newman

## Project Overview
This repository contains automated API tests for the **Restful Booker API**, implemented using **Postman** and executed via **Newman**. The tests validate key functionalities such as authentication, booking creation, retrieval, update, and deletion. The project is designed to be easily configurable and executable in both local and CI/CD environments.

## Project Structure

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js (>= v14)**: [Download & Install](https://nodejs.org/)
- **Postman** (optional for local debugging): [Download & Install](https://www.postman.com/)

### Clone the Repository
```sh
git clone https://github.com/figuedmundo/medirect-postman-framework.git
cd medirect-postman-framework
```

### Installation
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