def send_to_summarization_server(text_list):
    # Join the list of strings into a single string
    text = " ".join(text_list)

    # Send the text to the summarization server
    data = {"text": text}
    response = requests.post(SUMMARIZATION_SERVER_URL, json=data)
    response.raise_for_status()  # Raise an exception if the request failed

    # Get the summary from the response
    summary = response.json().get("summary")
    return summary