on run argv
    with timeout of (30 * 60) seconds
        tell application "Adobe Illustrator"
            set jsLocation to item 1 of argv

            set js to "#include '" & jsLocation & "';" & return
            set js to js & "main(arguments);" & return
            do javascript js with arguments argv
        end tell
    end timeout
end run
