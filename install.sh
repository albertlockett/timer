#!/bin/bash
BASEDIR=$(dirname "$0)
echo "export PATH=$PATH:$BASEDIR" >> ~/.bashrc
source ~/.bashrc
