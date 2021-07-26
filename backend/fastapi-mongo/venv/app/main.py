import uvicorn

if __name__ == "__main__":
    uvicorn.run("server.app:app", host="0.0.0.0", port=8000, reload=True)
    
    # Here, we instructed the file to run a Uvicorn server on port 8000 and reload on every file change.