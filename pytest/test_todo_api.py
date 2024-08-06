import requests

ENDPOINT = "https://todo.pixegami.io"

def test_can_call_endpoint():
    response = requests.get(ENDPOINT)
    assert response.status_code == 200

def test_can_create_task():
    response = requests.put(ENDPOINT + "/create-task", json=new_task_payload())
    assert response.status_code == 200

    data = response.json()
    print(data)

    task_id = data["task"]["task_id"]
    get_task_response = requests.get(ENDPOINT + "/get-task/" + task_id)

    assert get_task_response.status_code == 200

def test_can_update_task():
    payload = new_task_payload()
    create_task_response = create_task(payload)
    task_id = create_task_response.json()["task"]["task_id"]

    new_payload = {
        "user_id": payload["user_id"],
        "task_id": task_id,
        "content": "Study Physics",
        "is_done": True,
    }

    update_task_response = update_task(new_payload)
    assert update_task_response.status_code == 200

def create_task(payload):
    return requests.put(ENDPOINT + "/create-task", json=payload)

def update_task(payload):
    return requests.put(ENDPOINT + "/update-task", json=payload)

def get_task(task_id):
    return requests.get(ENDPOINT + "/get-task/" + task_id)

def new_task_payload():
    return {"content": "Study DSA",
  "user_id": "subtrex",
  "task_id": "1",
  "is_done": False}



