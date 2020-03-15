import requests
from bs4 import BeautifulSoup
import mysql.connector

class zaspaida():

    homelink = "https://www.chimica-online.it/sitemap"


    def dbtalk(self,query):
        mydb = mysql.connector.connect(
            host="",
            user="",
            passwd="",
            database = ""

        )
        mycursor = mydb.cursor()
        mycursor.execute(query)
        mydb.commit()
        print("query eseguita")

    def uploadmap(self,links,title):
        i = 0
        allq = ""
        for link in links:
            Titolo = str(title[i])
            link = links[i]
            if(Titolo == ""):
                i += 1
                continue
            else:
                query = "INSERT INTO python (ID,Titolo,Url) VALUES ('"+str(i)+"','"+Titolo+"','"+link+"'); "
                allq = allq + query
            i += 1
        return (allq)
    def getlinks(self):
        html = requests.get(self.homelink)
        soup = BeautifulSoup(html.content,"html.parser")
        links = soup.find_all("loc")
        data = {}
        i = 0
        for link in links:
            link = str(link)
            link = link.replace("<loc>","")
            link = link.replace("</loc>","")
            data[i] = link
            i += 1
        return data

    def gettitle(self):
        html = requests.get(self.homelink)
        soup = BeautifulSoup(html.content,"html.parser")
        links = soup.find_all("loc")
        data = {}
        i = 0
        for link in links:
            link = str(link)
            link = link.replace("<loc>","")
            link = link.replace("</loc>","")
            title = link.split("/")
            title = title[len(title)-1]
            title = title.replace(".htm","")
            title = title.replace("-"," ")
            title = title.replace("www."," ")
            data[i] = title
            i += 1
        return data

spider = zaspaida()
links = spider.getlinks()
Titolo = spider.gettitle()
allq = spider.uploadmap(links,Titolo)
spider.dbtalk(allq)
