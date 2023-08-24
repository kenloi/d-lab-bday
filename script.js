body, html {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%);
    height: 100%;
    overflow: hidden;
  }
  
  .container {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  
  #message {
    font-size: 36px;
    color: #e44d26;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: bold;
  }
  
  .name {
    font-size: 48px;
    color: #555;
    position: absolute;
    opacity: 0;
    transition: all 1s ease;
  }
  