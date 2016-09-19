
Administrator@WIN-QDGHBA5D4DM MINGW64 ~
$ git config --global user.name "Mandy"

Administrator@WIN-QDGHBA5D4DM MINGW64 ~
$ git config --global user.email mhuo019@aucklanduni.ac.nz

Administrator@WIN-QDGHBA5D4DM MINGW64 ~
$ git config --list
core.symlinks=false
core.autocrlf=true
core.fscache=true
color.diff=auto
color.status=auto
color.branch=auto
color.interactive=true
help.format=html
http.sslcainfo=C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
diff.astextplain.textconv=astextplain
rebase.autosquash=true
credential.helper=manager
user.name=Mandy
user.email=mhuo019@aucklanduni.ac.nz

Administrator@WIN-QDGHBA5D4DM MINGW64 ~
$ git config user.name
Mandy




Administrator@WIN-QDGHBA5D4DM MINGW64 ~
$ mkdir gitrepo

Administrator@WIN-QDGHBA5D4DM MINGW64 ~
$ pwd
/c/Users/Administrator

Administrator@WIN-QDGHBA5D4DM MINGW64 ~
$ dir
AppData
Application\ Data
Contacts
Cookies
Desktop
Documents
Downloads
Favorites
gitrepo
Links
Local\ Settings
Music
My\ Documents
NetHood
NTUSER.DAT
ntuser.dat.LOG1
ntuser.dat.LOG2
NTUSER.DAT{9c9f9f65-ae7e-11e3-80ba-0026b955dac2}.TM.blf
NTUSER.DAT{9c9f9f65-ae7e-11e3-80ba-0026b955dac2}.TMContainer00000000000000000001.regtrans-ms
NTUSER.DAT{9c9f9f65-ae7e-11e3-80ba-0026b955dac2}.TMContainer00000000000000000002.regtrans-ms
ntuser.ini
Pictures
PrintHood
Recent
Saved\ Games
Searches
SendTo
Start\ Menu
Templates
Videos

Administrator@WIN-QDGHBA5D4DM MINGW64 ~
$ cd gitrepo

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo
$ pwd
/c/Users/Administrator/gitrepo

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo
$ mkdir git_tutorial1

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo
$ dir
git_tutorial1

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo
$ cd git_tutorial1

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1
$ pwd
/c/Users/Administrator/gitrepo/git_tutorial1

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1
$ dir

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1
$ pwd
/c/Users/Administrator/gitrepo/git_tutorial1

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1
$ git status
fatal: Not a git repository (or any of the parent directories): .git

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1
$ git init
Initialized empty Git repository in C:/Users/Administrator/gitrepo/git_tutorial1/.git/

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git status
On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git clone https://github.com/mandyoceana/hello-world.git
Cloning into 'hello-world'...
remote: Counting objects: 10, done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 10 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (10/10), done.

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        hello-world/

nothing added to commit but untracked files present (use "git add" to track)

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ echo 'My Project' > README

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        README
        hello-world/

nothing added to commit but untracked files present (use "git add" to track)

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git add README
warning: LF will be replaced by CRLF in README.
The file will have its original line endings in your working directory.

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   README

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        hello-world/


Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git add  hello-world

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   README
        new file:   hello-world


Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git commit
Aborting commit due to empty commit message.

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git commit -m "first commit"
[master (root-commit) f1775b2] first commit
 2 files changed, 2 insertions(+)
 create mode 100644 README
 create mode 160000 hello-world

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git remote add origin https://github.com/mandyoceana/git_tutorial1.git

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git remote -v
origin  https://github.com/mandyoceana/git_tutorial1.git (fetch)
origin  https://github.com/mandyoceana/git_tutorial1.git (push)

Administrator@WIN-QDGHBA5D4DM MINGW64 ~/gitrepo/git_tutorial1 (master)
$ git push origin master
Counting objects: 3, done.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 259 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/mandyoceana/git_tutorial1.git
 * [new branch]      master -> master

