Here’s the documentation for pulling the `ollama` image from Docker Hub, running it, and using models inside it.

### **1. Pull the Ollama Image from Docker Hub**

To pull the latest `ollama` image from Docker Hub, use the following command:

```bash
docker pull ollama/ollama
```

This will download the official `ollama` image from Docker Hub to your local machine.

---

### **2. Running the Ollama Container**

After pulling the image, you can run the container with the following command:

```bash
docker run -d -p 11434:11434 --name myOllama ollama/ollama serve
```

- `-d` runs the container in detached mode (in the background).
- `-p 11434:11434` maps port 11434 from the container to your local machine (you can adjust the port as needed).
- `--name myOllama` assigns a custom name (`myOllama`) to the container.
- `ollama/ollama serve` runs the Ollama service inside the container.

---

### **3. Interacting with the Ollama Container**

To interact with the running container and use the Ollama command-line tool, you need to access its shell. Use the following command to open a terminal session inside the container:

```bash
docker exec -it myOllama bash
```

This will provide you with a Bash shell inside the container where you can run Ollama commands.

---

### **4. Pulling a Model Inside the Container**

Once inside the container, you can pull a model from the Ollama registry. For example, to pull the `tinyllama` model, run:

```bash
ollama pull tinyllama
```

This will download the model, and you can later run it or list available models.

---

### **5. Running a Model**

After the model is pulled, you can run it with the following command:

```bash
ollama run tinyllama
```

This will start an interactive session where you can send inputs to the model.

---

### **6. Listing Models**

To list the models that you have downloaded or that are available on your system, use the following command:

```bash
ollama list
```

This will show you the available models along with their ID, size, and last modification date.

---

### **7. Stopping the Container**

To stop the running container when you're done, use the following command:

```bash
docker stop myOllama
```

To remove the stopped container (if no longer needed):

```bash
docker rm myOllama
```

---

### **8. Other Useful Commands**

You can also list the running models, show model information, or manage models (push/pull) with these commands:

- **List running models:**
  ```bash
  ollama ps
  ```

- **Show model information:**
  ```bash
  ollama show <model_name>
  ```

- **Push a model to a registry:**
  ```bash
  ollama push <model_name>
  ```

- **Remove a model:**
  ```bash
  ollama rm <model_name>
  ```

---

### **References**
For full documentation on Ollama commands and usage, you can refer to the official [Ollama documentation](https://ollama.com/). You may also want to check Docker Hub for the most recent image versions of `ollama` at [ollama/ollama](https://hub.docker.com/r/ollama/ollama).

















1. Stopping the Container
To stop the running ollama container, use the docker stop command with the container name or ID:

bash
Copy code
docker stop myOllama
myOllama is the name of the container (or use the container ID if you prefer).
This will gracefully stop the container.

2. Starting the Container Again
To start the stopped container again, use the docker start command:

bash
Copy code
docker start myOllama
This will start the container without creating a new one.
If you want to attach to the container and interact with it (e.g., access its terminal), you can run:

bash
Copy code
docker attach myOllama
This will allow you to continue interacting with the container directly, just like when you started it.
