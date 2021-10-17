# A script to sort the papers
import os
from collections import defaultdict

class TheFetcher:
    def __init__(self, subject):
        self.dir = [os.path.join(dp, f) for dp, dn, filenames in
                    os.walk("/aus/jo/bitconnect/papers/{}".format(subject)) for f in filenames if
                    os.path.splitext(f)[1] == '.pdf']
        self.year = defaultdict(list)
        self.papers = {}

    def fetch(self):
        print("Total number of files: ", len(self.dir))
        # Parse the useless files out
        for subject in self.dir:
            if "Spanish" or "French" or "German" in subject:
                self.dir.remove(subject)
        print("After parsing: ", len(self.dir))

        # Assign each question to the corresponding markscheme
        x = 0
        for subject in self.dir:
            year = subject.split("/")[10].split(" ")[0]
            self.year[year].append(subject)
            x+=1
            # if x == 5:
            #     exit()
        print(len(self.year))

if __name__ == "__main__":
    subjects = ["Physics"]

    for subject in subjects:
        TheFetcher(subject).fetch()
