print("Start api read application")

import requests

result = requests.get("https://catfact.ninja/facts")
facts = result.json()
print(facts["current_page"])
print(facts["data"][0])