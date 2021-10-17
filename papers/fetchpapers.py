# A script to fetch a bunch of papers from
# https://www.ibdocuments.com/IB%20PAST%20PAPERS%20-%20SUBJECT/Group%204%20-%20Sciences/Physics_HL/

class TheFetcher:
    def __init__(self, url):
        self.url = url

    def fetch(self):
        print(self.url)

if __name__ == "__main__":
    urls = ["https://www.ibdocuments.com/IB%20PAST%20PAPERS%20-%20SUBJECT/Group%204%20-%20Sciences/Physics_HL/"]

    for url in urls:
        TheFetcher(url).fetch()
