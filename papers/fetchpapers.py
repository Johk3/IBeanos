# A script to sort the papers
import os
from collections import defaultdict

class TheFetcher:
    def __init__(self, subject):
        self.dir = [os.path.join(dp, f) for dp, dn, filenames in
                    os.walk("/aus/jo/IBeanos/papers/{}".format(subject)) for f in filenames if
                    os.path.splitext(f)[1] == '.pdf']
        self.allPapers = []
        self.year = defaultdict(list)
        self.papers = {}

    def fetch(self):
        print("Total number of files: ", len(self.dir))
        # Parse the useless files out
        for subject in self.dir:
            if ("Spanish" or "French") not in subject:
                self.allPapers.append(subject)
        print("After parsing: ", len(self.allPapers))

        # Assign each question to the corresponding markscheme
        for subject in self.allPapers:
            year = subject.split("/")[10].split(" ")[0]
            self.year[year].append(subject)
        print(len(self.year["2002"]))

if __name__ == "__main__":
    subjects = ["Physics"]

    for subject in subjects:
        TheFetcher(subject).fetch()
