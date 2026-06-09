Output demo/github-track-followers.gif

Require github-track-followers

Set Shell "bash"
Set Framerate 60
Set FontSize 12
Set Width 800
Set Height 400
Set Padding 20
Set Margin 5
Set MarginFill "#212830"
Set BorderRadius 10

Hide
Type 'cd /tmp/github-track-followers-demo && clear' Enter
Show

Type "github-track-followers --help" Sleep 200ms Enter
Wait Sleep 1500ms

Enter Enter Type "# list a user's GitHub followers (count + names)" Sleep 200ms Enter Enter
Wait Sleep 800ms

Type "github-track-followers -u piecioshka -f plain | head -15" Sleep 500ms Enter
Wait Sleep 1500ms

Enter Enter Type "# the same data, as JSON" Sleep 200ms Enter Enter
Wait Sleep 800ms

Type "github-track-followers -u piecioshka -f json | head -8" Sleep 500ms Enter
Wait Sleep 1500ms

Sleep 3s
