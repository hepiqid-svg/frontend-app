import logging
import re
import json
import os

from typing import List, Dict, Optional

def get_logger(name: str) -> logging.Logger:
    logger = logging.getLogger(name)
    logger.setLevel(logging.DEBUG)
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    stream_handler = logging.StreamHandler()
    stream_handler.setFormatter(formatter)
    logger.addHandler(stream_handler)
    return logger

def is_email(email: str) -> bool:
    pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return bool(re.match(pattern, email))

def is_password(password: str) -> bool:
    pattern = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
    return bool(re.match(pattern, password))

def load_json(file_path: str) -> Dict:
    with open(file_path, 'r') as file:
        return json.load(file)

def save_json(data: Dict, file_path: str) -> None:
    with open(file_path, 'w') as file:
        json.dump(data, file, indent=4)

def get_env_variable(var_name: str, default: Optional[str] = None) -> str:
    try:
        return os.environ[var_name]
    except KeyError:
        return default

def get_env_variables(var_names: List[str]) -> Dict:
    return {var_name: os.environ[var_name] for var_name in var_names}