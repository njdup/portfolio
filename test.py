

if __name__ == "__main__":
    with open('test.out', 'w+') as output:
        output.write('Hello!')
        print 'Done writing to file... now let us try reading from it...'

    with open('test.out', 'r') as infile:
        content = infile.read()
        print 'Found in file...'
        print content
