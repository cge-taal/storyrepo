#!/bin/sh

rm -rf apps/orca-dashboard/build
find . -maxdepth 4 -name node_modules -type d -exec rm -rf {} +