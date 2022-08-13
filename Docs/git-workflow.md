# Git workflow

## Branches

### Main

- Should not be worked on directly.
- PR from Dev at key milestones only when the code has been tested and is working.

### Dev

- Should not be worked on directly.
- PR from feature/fixes branches when tickets are completed.

### Other branches

- Each developer should work on a separate branch to each other.
- Preferably named [feat/fix]-[fe/be]-[ticketName].
- Branches ideally should be created for when a ticket is picked up and closed once the ticket is complete.

## PR from feat/fix branch to Dev

1. Dev1 commits and pushes the once the ticket is complete
2. Dev1 runs git status and checks working tree is clean
3. Dev1 goes to [github](https://github.com/andreas-assehn/waggle/pulls) and hits 'new pull request', selecting 'base:dev' and 'compare:[branchName]', create pull message with ticket name and hit 'create pull request'.
4. Dev1 puts ticket in 'To review' in trello board and notifies team to review
5. Dev2 logs into [github](https://github.com/andreas-assehn/waggle/pulls) and reviews PR, checking before hitting merge:
   - committing into 'dev'
   - file changes are appropriate for ticket

6. Dev2 updates the ticket in Trello to be complete and notifies the team that a pull request should be performed locally
7. Team pulls on current branch and dev branch

## PR to Main

- At a milestone where code is fully working and tested a PR should be made.
- Follow the same steps for the PR from feat/fix branches to dev, with a change to step 3 - "selecting 'base:main' and 'compare:dev'"

## Commits

- Commit often while working on a ticket and PR once ticket is complete
- Keep messages descriptive of what work was performed
- Keep messages short
