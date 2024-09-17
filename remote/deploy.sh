#!/bin/bash

# Define variables
STORAGE_ACCOUNT_NAME="florinatanasoaei"
CONTAINER_NAME="your_container_name"
LOCAL_FOLDER_PATH="path_to_your_dist_folder"
SAS_TOKEN="your_sas_token"

# Upload files to Azure Blob Storage
az storage blob upload-batch \
    --account-name "$STORAGE_ACCOUNT_NAME" \
    --destination "$CONTAINER_NAME" \
    --source "$LOCAL_FOLDER_PATH" \
    --sas-token "$SAS_TOKEN"

echo "Upload completed."