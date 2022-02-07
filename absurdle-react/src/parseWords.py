import json
import os

with open(
        os.path.join(os.path.dirname(os.path.realpath(__file__)),
                     'common.txt'), 'r') as f:
    commonlines = f.readlines()

with open(
        os.path.join(os.path.dirname(os.path.realpath(__file__)), 'words.txt'),
        'r') as f:
    wordlines = f.readlines()

commonSet = set([line.strip().upper() for line in commonlines])
wordSet = set([line.strip().upper() for line in wordlines])
commonSet = commonSet.intersection(wordSet)

# print([line.strip() for line in lines])
json.dump([line for line in commonSet],
          open(
              os.path.join(os.path.dirname(os.path.realpath(__file__)),
                           'common.json'), 'w'))

# print([line.strip() for line in lines])
json.dump([line for line in wordSet],
          open(
              os.path.join(os.path.dirname(os.path.realpath(__file__)),
                           'words.json'), 'w'))
